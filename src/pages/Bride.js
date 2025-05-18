import React, { useState } from 'react';
import data from '../assets/image_data.json';
import pinIcon from '../assets/location-pin.png';
import naverMapIcon from '../assets/naver-map-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as MapDiv, NaverMap, Marker, useNavermaps} from 'react-naver-maps';
import '../App.css';
import ImageModal from '../components/imageModal';
import AccountModal from '../components/accountModal';

const brideAccountData = {
  data : [
    {
      title: "신부 계좌",
      bank_name: process.env.REACT_APP_BRIDE_ACCOUNT_BANK,
      account_owner: process.env.REACT_APP_BRIDE_ACCOUNT_OWNER,
      account_number: process.env.REACT_APP_BRIDE_ACCOUNT_NUMBER
    },
    {
      title: "혼주 계좌",
      bank_name: process.env.REACT_APP_BRIDE_FATHER_ACCOUNT_BANK,
      account_owner: process.env.REACT_APP_BRIDE_FATHER_ACCOUNT_OWNER,
      account_number: process.env.REACT_APP_BRIDE_FATHER_ACCOUNT_NUMBER
    },
    {
      title: "혼주 계좌",
      bank_name: process.env.REACT_APP_BRIDE_MOTHER_ACCOUNT_BANK,
      account_owner: process.env.REACT_APP_BRIDE_MOTHER_ACCOUNT_OWNER,
      account_number: process.env.REACT_APP_BRIDE_MOTHER_ACCOUNT_NUMBER
    }
  ]
}

const groomAccountData = {
  data : [
    {
      title: "신랑 계좌",
      bank_name: process.env.REACT_APP_GROOM_ACCOUNT_BANK,
      account_owner: process.env.REACT_APP_GROOM_ACCOUNT_OWNER,
      account_number: process.env.REACT_APP_GROOM_ACCOUNT_NUMBER
    },
    {
      title: "혼주 계좌", 
      bank_name: process.env.REACT_APP_GROOM_MOTHER_ACCOUNT_BANK,
      account_owner: process.env.REACT_APP_GROOM_MOTHER_ACCOUNT_OWNER,
      account_number: process.env.REACT_APP_GROOM_MOTHER_ACCOUNT_NUMBER
    }
  ]
}

// name infos
const GroomName = process.env.REACT_APP_GROOM_NAME;
const BrideName = process.env.REACT_APP_BRIDE_NAME;
const GroomParentsName = process.env.REACT_APP_GROOM_PARENTS_NAME;
const BrideParentsName = process.env.REACT_APP_BRIDE_PARENTS_NAME;

// Date
const WeddingDate = process.env.REACT_APP_WEDDING_DATE;

// 웨딩홀
const WeddingLocationName = process.env.REACT_APP_WEDDING_LOCATION_NAME;
const WeddingLocationMapLink = process.env.REACT_APP_WEDDING_LOCATION_MAP_LINK;
const WeddingLocationStreetAddress = process.env.REACT_APP_WEDDING_LOCATION_STREET_ADDRESS;
const WeddingLocationPhoneNumber = process.env.REACT_APP_WEDDING_LOCATION_PHONE_NUMBER;
// 주차장
const WeddingLocationParkingName = process.env.REACT_APP_WEDDING_LOCATION_PARKING_NAME;
const WeddingLocationParkingAddress = process.env.REACT_APP_WEDDING_LOCATION_PARKING_ADDRESS;

function Bride() {
  // state for image modal
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  // state for account modal
  const [ clickedAccountData, setClickedAccountData ] = useState(null);
  const [ copiedAccount, setCopiedAccount ] = useState(null);

  const navermaps = useNavermaps()

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  const accountClick = (account_data) => {
    setClickedAccountData(account_data.data);
  };

  const handleRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
      });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  
  const handleRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength-1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
      });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="">
      <div className='main container'>
        <div className="row justify-content-md-center">
          <div className="col col-md-2 col-lg-3">
          </div>

          <div className="col-md">
            <div className='mainsection'>
              <div>
                <img src="https://dave-khim-aws-bucket-public.s3.ap-northeast-2.amazonaws.com/test/love-tenderness-couple-s-crossed-hands.jpg" className='main-image' alt='t1'></img>
              </div>
              <div className='mainsection-text'>
                <div className='mainsection-text-1'>결혼식에 초대합니다</div>
                <div className='mainsection-text-2'>
                  {GroomName} <span className='text2-inner'> & </span> {BrideName}
                </div>
                <div className='mainsection-text-3'>{WeddingDate}<br/>{WeddingLocationName}</div>
              </div>
            </div>
            <div className='invitation-section'>
              <div className='invitation-section-text1'>INVITATION</div>
              <div className='invitation-section-text2'>
                    서로의 열일곱을 기억하는 우리가<br/>
                    이제는 남은 평생을 함께 걸어가려 합니다.<br/>
                    서로 다른 색으로 만났지만<br/>
                    앞으로 서로에게 어울리는 색이 되도록<br/>
                    사랑하고 배려하며 살겠습니다.<br/>
                    저희의 오랜 약속의 순간을 <br />
                    축복해주시면 감사하겠습니다.
              </div>
              <div className='invitation-section-text3'>
                {GroomParentsName}<span className='text3-inner'>의 장남</span> 신랑 {GroomName}
              </div>
              <div className='invitation-section-text3'>
                {BrideParentsName}<span className='text3-inner'>의 차녀</span> 신부 {BrideName}
              </div>
            </div>
            <div className='gallery-section'>
              <div className='gallery-section-text'>
                GALLERY
              </div>
            </div>
            <div>
              <div className='gallery-image-list-wrapper row'>
                  {data.data.map((item, index) => (
                    <div key={index} className='col-4'>
                      <img className='gallery-image' src={item.thumb_image_link} alt={item.text} onClick={()=> handleClick(item, index)}/>
                    </div>
                  ))}
              </div>
              {clickedImg && <ImageModal 
              clickedImg={clickedImg}
              handleRotationRight={handleRotationRight}
              handleRotationLeft={handleRotationLeft}
              setClickedImg={setClickedImg}
              />}
            </div>
            <div className='location-section'>
              <div className='location-section-text1'>
                찾아오시는 길
              </div>
            </div>
            <div className='location-map-section'>
              <MapDiv
                style={{
                  width: '100%',
                  height: '350px'
                }}
              >37.50177, 127.0316
                <NaverMap 
                  defaultCenter={new navermaps.LatLng(37.50177,127.0316)}
                  defaultZoom={16}>
                  <Marker 
                  position={new navermaps.LatLng(37.50177,127.0316)} 
                  icon={
                    {
                      url : pinIcon,
                      size : new navermaps.Size(64, 64),
                    }
                  }/>
                </NaverMap>
              </MapDiv>
            </div>
            <div className='location-info-section'>
                <div className='location-info-section-text1'>위치</div>
                <div className='location-info-section-text2'>
                    {WeddingLocationName}<br/>
                    {WeddingLocationStreetAddress}<br/>
                    <a href={`tel:${WeddingLocationPhoneNumber}`} style={{display: 'inline'}}>{WeddingLocationPhoneNumber}</a>
                    <a href={WeddingLocationMapLink} style={{display: 'inline'}}>
                      네이버지도 바로가기
                      {/* <img src={naverMapIcon} alt="네이버 지도 바로가기" style={{width: '50px', height: '50px', verticalAlign: 'middle'}} /> */}
                    </a>
                </div>
            </div>
            <div className='location-how-publictrans-section'>
              <div className='location-how-publictrans-section-text1'>대중교통</div>
              <ul className='location-how-publictrans-section-list'>
                <li>지하철 2호선 역삼역 4번 출구 → 출구 방향 직진</li>
                <li>한국지식재산센터와 강남N타워 사이 골목으로 우회전</li>
                <li>정면 방향으로 200m 직진 (도보 약 5~7분)</li>
              </ul>
            </div>
            <div className='location-how2-section'>
              <div className='location-how2-section-text1'>자가용</div>
              <div className='location-how2-section-text2'>
                네비게이션 이용 시 "{WeddingLocationName}"를 입력하세요.<br/>
                ({WeddingLocationParkingName} 주차 2시간 무료)
              </div>
            </div>
            <div className='congratulatory-section'>
              <div className='congratulatory-section-text'>마음 전하실 곳</div>
                <div 
                  className='congratulatory-section-btn' 
                  onClick={() => accountClick(groomAccountData)}>신랑측 계좌번호</div>
                <div 
                  className='congratulatory-section-btn'
                  onClick={() => accountClick(brideAccountData)}>신부측 계좌번호</div>
            </div>
            {clickedAccountData && <AccountModal 
              clickedAccountData={clickedAccountData}
              setClickedAccountData={setClickedAccountData}
              copiedAccount={copiedAccount}
              setCopiedAccount={setCopiedAccount}
              />}
          </div>

          <div className="col col-md-2 col-lg-3">
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Bride;
