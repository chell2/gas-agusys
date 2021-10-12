// 報告手順の誘導（被災報告）

var buttonTitle = "被災状況の報告";

function createLocationButton() {
  const defaultAction = {
    type: "location",
    label: "位置情報を送る",
  };
  const locationButton = [
    {
      type: "template",
      altText: buttonTitle + "（1）位置情報を送る",
      template: {
        type: "buttons",
        thumbnailImageUrl:
          "https://github.com/chell2/nodejs-agusys/blob/main/img/1.png?raw=true",
        imageAspectRatio: "rectangle",
        imageSize: "cover",
        imageBackgroundColor: "#03989e",
        text: "タップして位置情報を送信すると、農地の候補を表示します",
        defaultAction: defaultAction,
        actions: [defaultAction],
      },
    },
  ];
  return locationButton;
}

function createPhotoButton() {
  const defaultAction = {
    type: "camera",
    label: "写真を撮る",
  };
  const photoButton = [
    {
      type: "template",
      altText: buttonTitle + "（2）写真を送る",
      template: {
        type: "buttons",
        thumbnailImageUrl:
          "https://github.com/chell2/nodejs-agusys/blob/main/img/3.png?raw=true",
        imageAspectRatio: "rectangle",
        imageSize: "cover",
        imageBackgroundColor: "#03989e",
        text: "現地（被災した作物、施設・機械）の状況がわかる写真を送ってください",
        defaultAction: defaultAction,
        actions: [
          defaultAction,
          {
            type: "cameraRoll",
            label: "撮影した写真から選ぶ",
          },
        ],
      },
    },
  ];
  return photoButton;
}

function createConfilmTemplate() {
  const confilmTemplate = [
    {
      type: "template",
      altText: buttonTitle,
      template: {
        type: "confirm",
        text: "他にも写真を送りますか？",
        actions: [
          {
            type: "message",
            label: "はい",
            text: "被災写真を送る",
          },
          {
            type: "message",
            label: "いいえ",
            text: "次の操作に進む",
          },
        ],
      },
    },
  ];
  return confilmTemplate;
}

function createReportButton() {
  const defaultAction = {
    type: "message",
    label: "報告する",
    text: "【報告】",
  };
  const reportButton = [
    {
      type: "template",
      altText: buttonTitle + "（3）状況を報告する",
      template: {
        type: "buttons",
        thumbnailImageUrl:
          "https://github.com/chell2/nodejs-agusys/blob/main/img/5.png?raw=true",
        imageAspectRatio: "rectangle",
        imageSize: "cover",
        imageBackgroundColor: "#03989e",
        text: "下記をタップ後に送られたメッセージを記録します",
        defaultAction: defaultAction,
        actions: [defaultAction],
      },
    },
  ];
  return reportButton;
}