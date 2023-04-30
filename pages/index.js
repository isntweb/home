import { useState, useEffect } from 'react';

import Image from 'next/image'
import TopMenu from '../components/TopMenu'
import Bios from './bios.js'
import PocketOperator from '../components/PocketOperator';
import OP1 from '../components/OP1';
import NintendoSwitch from '../components/NintendoSwitch';
import Select from '../components/Select';
import { useElementSize } from '../hooks';

const devices = [
  {
    name: "Pocket Operator",
    Component: PocketOperator,
  },
  {
    name: "OP-1",
    Component: OP1,
  },
  {
    name: "Switch",
    Component: NintendoSwitch,
  }
];

export default function Index() {
  const [device, setDevice] = useState(devices[0]);
  const [ref, size] = useElementSize();

  const [ scaleBy, setScaleBy ] = useState(1);
  const [rotate, setRotate] = useState(false);

  const Device = device.Component;

  useEffect(() => {
    if (window !== undefined) {

      const scaleBy = Math.min(
        window.screen.availWidth / size.width,
        window.screen.availHeight / size.height
      );
      setScaleBy(scaleBy);
      if (size.width > size.height) {
        setRotate(true);
      } else {
        setRotate(false);
      }
    }
  }, []);

  return (
    <>
      <div style={{
        position: 'absolute',
        top: '5%', left: '50%',
        transform: 'translate(-50%,-50%)'
      }}>
        <Select options={devices} setOption={setDevice} selected={device} />
      </div>
    <div style={{ transform: `${rotate ? 'rotate(0.25turn) ' : ''}scale(${scaleBy})` }}>
        <Device innerRef={ref} />
      </div>
    </>
  );
}
