"use client"

import { Stage } from '@pixi/react';
import { Tank } from './game_components/Tank';

export default function RenderSomething() {

  return (
    <Stage options={{
      backgroundColor: 0xD2CAE6, 
      resizeTo: window,
    }}
    height={window.innerHeight}
    width={window.innerWidth}
    >
      <Tank />
    </Stage>
  );
};