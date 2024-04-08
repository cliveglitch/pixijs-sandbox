import { AnimatedSprite, Container, type PixiRef, useTick } from "@pixi/react";
import { Assets, type Spritesheet, type Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";

type IAnimatedSprite = PixiRef<typeof AnimatedSprite>;

export function Tank() {
    const spriteRef = useRef<IAnimatedSprite>(null);
    const [x, setX] = useState(0);
    const [tankFrames, setTankFrames] = useState<Texture[]>();

    useTick(delta => {
        setX(h => h < innerWidth + 100 ? h + delta*(3) : -200);
    });

    useEffect(() => {
        void Assets.load("/Images/Di-Cokka Spritesheet.json")
        .then((tank: Spritesheet) => {
            console.log(tank);
            const textures = Object.entries(tank.textures).filter(([name, _]) => name.startsWith("Idle")).map(([_, texture]) => texture)
            console.log(textures);
            setTankFrames(textures);
        });
      }, []);

    return (
    <Container x={500} y={300}>
    {
        tankFrames?.length && tankFrames?.length > 0 && (
            <AnimatedSprite
                animationSpeed={0.1}
                scale={2}
                width={spriteRef.current?.width ? -1* spriteRef.current?.width : undefined}
                isPlaying={true}
                textures={tankFrames}
                ref={spriteRef}
            />
        )
        
    }
    </Container>)
}