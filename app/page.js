import VStack from '@/app/chakra/vstack/vstack';
import HStack from '@/app/chakra/hstack/hstack';
import Divider from '@/app/chakra/divider/divider';
import Image from 'next/image';
import '@/app/chakra/styles/index.css';

export default function Home() {
  return (
    <>
      <div className='-center'>
        <div className='-container'>
          <div className='-heading -center colorred fontsize2rem'>
            This is a VStack (2rem).
          </div>
          <Divider />
          <Divider />
          <VStack spacing={5}>
            <div className='-box'>
              <div className='-heading colororange fontsize1_5rem'>
                This is the First Header (1.5rem)
              </div>
              <p className='-text'>This is the first text.</p>
            </div>
            <div className='-box'>
              <div className='-heading'>This is the Second Header (1.2rem)</div>
              <p className='-text'>This is the second text.</p>
            </div>
            <Divider />
            <div className='-heading'>This is an HStack.</div>
            <HStack spacing={2}>
              <p className='-text'>One</p>
              <p className='-text'>Two</p>
              <p className='-text'>Three</p>
            </HStack>
            <Divider />
            <div className='-box'>
              <div className='-heading'>This is the Third Header</div>
              <p className='-text'>This is the third text.</p>
            </div>
            <Divider />
            <div className='-heading'>This is a Table.</div>
            <div className='-tablecontainer'>
              <table className='-table'>
                <caption className='-tablecaption'>
                  Storer Family Contact Info
                </caption>
                <thead className='-thead'>
                  <tr className='-tr'>
                    <th className='-th'>First Name</th>
                    <th className='-th'>Last Name</th>
                    <th className='-th'>E-mail Address</th>
                  </tr>
                </thead>
                <tbody className='-tbody'>
                  <tr className='-tr'>
                    <td className='-td'>Jeff</td>
                    <td className='-td'>Storer</td>
                    <td className='-td'>jeffrey.storer@gmail.com</td>
                  </tr>
                  <tr className='-tr'>
                    <td className='-td'>Sue</td>
                    <td className='-td'>Storer</td>
                    <td className='-td'>suestorer@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Divider />
            <div className='-heading'>This is an unordered list.</div>
            <ul className='-ul'>
              <li className='-li'>Jeff</li>
              <li className='-li'>Sue</li>
              <li className='-li'>Molly</li>
              <li className='-li'>Nat</li>
            </ul>
            <Divider />
            <div className='-heading'>This is an Image.</div>
            <Image
              src='https://drive.google.com/uc?export=view&id=1FPV-j6QalPhd-s1G30f4ZjEBmbq2nUjK'
              alt='Spring Book & Art Sale'
              width={352}
              height={464}
            />
          </VStack>
        </div>
      </div>
    </>
  );
}
