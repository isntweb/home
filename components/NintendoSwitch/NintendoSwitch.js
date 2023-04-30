
const NintendoSwitch = () => {
  return (
    <div class="switch">
          <div class="body">
            <div class="volume"></div>
            <div class="screen">
              <div class="logo">
                <div class="icon">
                  <div class="icon-part left"></div>
                  <div class="icon-part right"></div>
                </div>
                <h1><span>Nintendo</span>Switch</h1>
              </div>
            </div>
          </div>

          <div class="joy-con left">
            <div class="button-group">
              <div class="button arrow up"></div>
              <div class="button arrow right"></div>
              <div class="button arrow down"></div>
              <div class="button arrow left"></div>
            </div>

            <div class="stick"></div>
            <div class="select"></div>
            <div class="capture"></div>
            <div class="shoulder l"></div>
          </div>

          <div class="joy-con right">
            <div class="button-group">
              <div class="button letter" data-letter="X"></div>
              <div class="button letter" data-letter="A"></div>
              <div class="button letter" data-letter="B"></div>
              <div class="button letter" data-letter="Y"></div>
            </div>

            <div class="stick"></div>
            <div class="start"></div>
            <div class="home"></div>
            <div class="shoulder r"></div>
          </div>
        </div>
  );
}

export default NintendoSwitch;
