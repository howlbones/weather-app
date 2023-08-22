export const animation = (() => {
  const eye = document.querySelector('#eye');
  const topEyelid = document.querySelector('.top-eyelid');
  const bottomEyelid = document.querySelector('.bottom-eyelid');

  const moveEye = () => {
    if (eye) {
      eye.classList.add('running');
    }
    setTimeout(_pauseEye, 4000);
  };

  const _pauseEye = () => {
    eye.classList.remove('running');
  };

  const closeEye = async () => {
    topEyelid.classList.remove('opened');
    bottomEyelid.classList.remove('opened');
  };

  const openEye = async () => {
    topEyelid.classList.add('opened');
    bottomEyelid.classList.add('opened');
  };

  return { moveEye, closeEye, openEye };
})();
