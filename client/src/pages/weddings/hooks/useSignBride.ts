import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SIGN } from '../../../libs/graphql/sign';
import { currentImage, brideImage, brideSign } from '../../../libs/store/recoil';

function useSignBride() {
  const { weddingId }: { weddingId: string } = useParams();
  const [bride, setBride] = useRecoilState(brideSign);
  const [, setBrideImg] = useRecoilState(brideImage);
  const [currentImg, setCurrentImg] = useRecoilState(currentImage);
  const [AddSign, { client }] = useMutation(ADD_SIGN);

  const dataURItoBlob = (dataURI: string) => {
    // Base64 데이터 디코딩
    const blob = atob(dataURI.split(',')[1]);

    let array: number[] = [];

    for (let i = 0; i < blob.length; i++) {
      array.push(blob.charCodeAt(i));
    }

    const file = new Blob([new Uint8Array(array)], {
      type: 'image/png',
    });

    return file;
  };

  const onUpload = async () => {
    try {
      const file = dataURItoBlob(currentImg);
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(
        process.env.NODE_ENV === 'production'
          ? 'https://paysys.kr/upload'
          : 'http://localhost:4000/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response) {
        alert('Error');
        return;
      }

      const data = await response.json();

      setBrideImg(`https://image.paysys.kr/${data.key}`);
      setCurrentImg('');

      const response2 = await AddSign({
        variables: {
          weddingId,
          sex: 'bride',
          image: `https://image.paysys.kr/${data.key}`,
        },
      });

      if (!response2 || !response2.data) return;

      await client.clearStore();

      setBride(false);
    } catch (err) {
      alert(err);
    }
  };

  return {
    visibleBride: bride,
    titleBride: '신부 서명',
    onCancelBride: () => setBride(false),
    onConfirmBride: onUpload,
  };
}

export default useSignBride;
