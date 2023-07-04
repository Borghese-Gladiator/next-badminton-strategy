import { useEffect, useState, useMemo } from 'react';
import { Box, Button, Paper } from '@mui/material'
import useLines from '@/hooks/useLines';
import useKeyPress from '@/hooks/useKeyPress';


const SnapshotActionBar = () => {
  const [lines, setLines] = useLines();
  const [snapshots, setSnapshots] = useState([]);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const leftPress = useKeyPress(["ArrowLeft"]);
  const rightPress = useKeyPress(["ArrowRight"]);
  const savePress = useKeyPress(["Ctrl", "S"]);

  useEffect(() => {
    if (leftPress && snapshots.length != 0) {
      const newSelectedSnap = selectedSnap - 1 < 0 ? selectedSnap : selectedSnap - 1
      setSelectedSnap(newSelectedSnap);
      setLines(snapshots[newSelectedSnap]);
    }
  }, [leftPress]);
  useEffect(() => {
    if (rightPress && snapshots.length != 0) {
      const newSelectedSnap = selectedSnap + 1 > snapshots.length - 1 ? selectedSnap : selectedSnap + 1
      setSelectedSnap(newSelectedSnap);
      setLines(snapshots[newSelectedSnap]);
    }
  }, [rightPress]);
  useEffect(() => {
    if (savePress) {
      setSnapshots([...snapshots, lines])
    }
  }, [savePress]);

  const baseActions = useMemo(() => [
    {
      // Saves current lines as snapshot
      text: 'Save',
      func: () => setSnapshots([...snapshots, lines])
    },
    {
      // Clears canvas
      text: 'Clear',
      func: () => setLines([])
    },
    {
      // Deletes last snapshot
      text: 'Delete',
      func: () => setSnapshots([...snapshots.slice(0, -1)])
    },
    /*
    TODO(tim): 7/3 - undo/redo actions
    */
  ], [snapshots, lines]);
  const snapshotRevertList = useMemo(() => snapshots.map((snapshot, idx) => ({
    text: idx,
    func: () => {
      setSelectedSnap(idx);
      setLines(snapshot);
    }
  })), [snapshots]);
  const actions = baseActions.concat(snapshotRevertList);

  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'row',
      p: 1,
      m: 1,
    }}>
      {
        actions.map(({ text, func }, idx) => {
          return (
            <Button
              key={`${text}-${idx}`}
              variant={idx === selectedSnap + baseActions.length ? "contained" : "outlined"}
              onClick={() => func()}
              sx={{ p: 1, m: 1 }}
            >
              {text}
            </Button>
          )
        })
      }
    </Paper>
  )
}

export default SnapshotActionBar;