import {store, injectAsyncReducer} from './Store';


const windowFrameReducer = (nowState, action) => {

  if(action.reducer !== 'TEST_REDUCER') {
    return {
      mOption: nowState === undefined ? [170, 50] : nowState.mOption,
      wOption: nowState === undefined ? [160, 40] : nowState.wOption
    };
  }

  if(action.type === 'MOPTION'){

    return Object.assign({}, nowState, {
      mOption : [...action.mOption]
    })
  }else if(action.type === 'WOPTION'){

    return Object.assign({}, nowState, {
      wOption : [...action.wOption]
    })
  }
};

injectAsyncReducer('TEST_REDUCER', windowFrameReducer);

function sleep(ms) {
  return new Promise(resolve=>setTimeout(resolve, ms));
}
 
(async function() {
  let i = 0;
  let mTall = 0;
  let mWeight = 0;

  let wTall = 0;
  let wWeight = 0;

  let mData = [
    [170, 50]
  ];
  let wData = [
    [160, 40]
  ];

  while(true){
    
    i = i + 1;
    mTall = Math.floor(Math.random() * (200 - 150) + 150);
    mWeight = Math.floor(Math.random() * (100 - 45) + 45);
    mData.push([mTall, mWeight])

    wTall = Math.floor(Math.random() * (170 - 130) + 130);
    wWeight = Math.floor(Math.random() * (80 - 35) + 35);
    wData.push([wTall, wWeight])

    store.dispatch({
      reducer     : 'TEST_REDUCER',
      type        : 'MOPTION',
      mOption     : mData
    })

    store.dispatch({
      reducer     : 'TEST_REDUCER',
      type        : 'WOPTION',
      wOption     : wData
    })

    if(i > 200) break;

    await sleep(1000);
  }
})();