//関数コンポーネント内でcreateContext, useContextを扱えるようにするため
//React import時に同じくimportする

import React, { createContext, useContext } from "react";
import "./styles.css";

//createContext()でContextオブジェクトSampleContextObjectを作成
//React.creatContext()の戻り値らしい
const SampleContextObject = createContext();

//Contextオブジェクトから値を取得できるConsumerコンポーネント
//ConsumerComponent
const ConsumerComponent = () => {

  //useContext()を利用してContextオブジェクトから値を取得
  //useContext()はContextオブジェクトから値を取得できるフック
  //messageTextはProviderコンポーネントから取得したvalueの値を受け取る
  const messageText = useContext(SampleContextObject);

  console.log(messageText);

  //Providerコンポーネントから取得した値を表示
  return <p>{messageText}</p>;
};

//messageを定義
//これをコンテキストオブジェクトのvalue属性に指定してやることで
//受け渡す
const message = "I love React!";

export default function App() {
  return (

    {/*value俗税の値を提供するためにConsumerComponentを
    sampleContextObject.Providerでラップ
  ツリー内で利用したい値をvalue属性に渡す */}

    {/* exportのreturn文でエラーがシンタックスエラーが出てるらしいけど分からん */}

    <SampleContextObject.Provider value={message}>

      {/* ConsumerComponentはProviderコンポーネントの中なので、value属性の値を参照可 */}
      <ConsumerCOmponent />
    </SampleContextObject.Provider>>
  );
}
