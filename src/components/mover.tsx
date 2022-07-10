import {FC, useEffect } from "react";
import {invoke} from "@tauri-apps/api";

interface MoverProps {
   moveDelay: MoveDelay;
   isMoving: boolean;
}

interface MoveDelay {
   low: number;
   high?: number;
}
// Dummy component used to control the event loop.
const Mover: FC<MoverProps> = ({ moveDelay, isMoving}) => {
    useEffect(() => {
        while (isMoving) {
            setTimeout(() => invoke('move_mouse').then((res) => console.log('moving mouse')), 5000);
        }
    }, [isMoving]);

   return <></>
}

export default Mover;

// If high is set, we use high and low as the random range for the move delay.
// Otherwise, we use the low as the delay.
function randomDelay(moveDelay: MoveDelay): number {
    let delaySeconds = moveDelay.high ? Math.floor(Math.random() * (moveDelay.high - moveDelay.low + 1) + moveDelay.low) : moveDelay.low;
    // Convert to milliseconds
    return delaySeconds * 1000;
}