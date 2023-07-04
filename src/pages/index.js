import Head from 'next/head'
import Image from 'next/image'
import { useState, useMemo } from 'react';

import DrawingArea from '@/components/DrawingArea'
import ShapesSidebar from '@/components/DraggableArea'
import useDimensions from '@/hooks/useDimensions';
import SnapshotActionBar from '@/components/SnapshotActionBar';
import { AppBar, Box, Typography } from '@mui/material'

import styles from '@/styles/Home.module.css'



export default function Home() {
  const [divRef, { width, height }] = useDimensions();
  const [divRef2, { width: width2, height: height2 }] = useDimensions();

  const [lines, setLines] = useState([]);
  const [snapshots, setSnapshots] = useState([]);
  const baseActions = [
    {
      text: 'Save',
      func: () => setSnapshots([...snapshots, lines])
    },
    {
      text: 'Delete Last',
      func: () => setSnapshots([...snapshots.slice(0, -1)])
    },
    /*
    TODO(tim): 7/3 - undo/redo actions
    */
  ]
  const actions = useMemo(() => {
    const snapshotRevertList = snapshots.map((snapshot, idx) => {
      return {
        icon: 'blah',
        text: idx,
        func: () => setLines(snapshot)
      };
    });
    return baseActions.concat(snapshotRevertList);
  }, [snapshots]);

  return (
    <>
      <Head>
        <title>Badminton Strategy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: '1fr 3fr 1fr',
            gap: 1,
            gridTemplateAreas: `"header header header header"
                                "main main main sidebar"
                                "footer footer footer footer"`,
            minHeight: '100vh',
          }}
        >
          <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>
            <Box p={1}>
              <Typography variant="h1">Badminton Strategy</Typography>
              <Typography variant="subtitle1">こういう贈物が好きでか？</Typography>
            </Box>
          </Box>
          <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }} ref={divRef}>
            <DrawingArea lines={lines} setLines={setLines} width={width} height={height} />
            <SnapshotActionBar actions={actions} />
          </Box>
          <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }} ref={divRef2}>
            <ShapesSidebar width={width2} height={height2} />
          </Box>
          <Box sx={{ gridArea: 'footer', bgcolor: 'warning.main' }}>Footer</Box>
        </Box>
      </main>
    </>
  )
}
