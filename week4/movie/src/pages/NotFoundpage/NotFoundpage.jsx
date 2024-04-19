import React from "react";
import {
    NFcontainer,
    Textcontainer,
    Text1,
    Text2,
    Text3,
    Text4
  
  } from './NotFoundStyle';

export default function NotFound () {
    return(


        <NFcontainer>
            <Textcontainer>
                <Text1>Oops!</Text1>
                <Text2>예상치 못한 에러가 발생했습니다; ~.~</Text2>
                <Text3>Not Found</Text3>
                <Text4>메인으로 이동하기</Text4>
            </Textcontainer>
        </NFcontainer>

    );
}