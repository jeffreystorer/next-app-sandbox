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
          <h2 className='-heading -center colorred fontsize2rem'>
            This is a VStack (2rem).
          </h2>
          <Divider />
          <Divider />
          <VStack spacing={0}>
            <div className='-box'>
              <h2 className='-heading colororange fontsize1_5rem'>
                This is the First Header (1.5rem)
              </h2>
              <p className='-text'>This is the first text.</p>
            </div>
            <div className='-box'>
              <h2 className='-heading fontsize1_2rem fontfamilylucidacalligraphy'>
                The Village Library: Lucida Calligraphy (1.2rem)
              </h2>
              <p className='-text'>This is the second text.</p>
            </div>
            <div className='-box'>
              <h2 className='-heading fontsize1rem fontfamilylucidacalligraphy'>
                The Village Library: Lucida Calligraphy (1rem)
              </h2>
              <p className='-text'>This is the third text.</p>
            </div>
            <Divider width='30.3rem' />
            <h2 className='-heading'>This is an HStack.</h2>
            <HStack spacing={2}>
              <p className='-text'>One</p>
              <p className='-text'>Two</p>
              <p className='-text'>Three</p>
            </HStack>
            <Divider width='212px' />
            <div className='-box'>
              <h2 className='-heading'>This is the Third Header</h2>
              <p className='-text'>This is the third text.</p>
            </div>
            <Divider width='212px' />
            <h2 className='-heading'>This is a Table.</h2>
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
            <Divider width='212px' />
            <h2 className='-heading'>This is an unordered list.</h2>
            <ul className='-ul'>
              <li className='-li'>Jeff</li>
              <li className='-li'>Sue</li>
              <li className='-li'>Molly</li>
              <li className='-li'>Nat</li>
            </ul>
            <Divider width='212px' />
            <h2 className='-heading'>This is an Image.</h2>
            <img
              className='-image'
              src='https://drive.google.com/uc?export=view&id=1FPV-j6QalPhd-s1G30f4ZjEBmbq2nUjK'
              alt='Spring Book & Art Sale'
              width={154}
              height={203}
            />
          </VStack>
        </div>
      </div>
    </>
  );
}
