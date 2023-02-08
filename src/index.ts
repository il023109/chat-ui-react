export * from './chat-types';
export { ChatController } from './chat-controller';
export { AudioMediaRecorder } from './audio-media-recorder';
export { MuiChat } from './mui/MuiChat';
export { MuiMessage } from './mui/MuiMessage';
export { MuiTextInput } from './mui/MuiTextInput';
export { MuiSelectInput } from './mui/MuiSelectInput';
export { MuiMultiSelectInput } from './mui/MuiMultiSelectInput';
export { MuiFileInput } from './mui/MuiFileInput';
export { MuiAudioInput } from './mui/MuiAudioInput';


export default function App(): React.ReactElement {
  const [chatCtl] = React.useState(new ChatController());

  React.useMemo(async () => {
    // Chat content is displayed using ChatController
    await chatCtl.addMessage({
      type: 'text',
      content: `Hello, What's your name.`,
      self: false,
    });
    const name = await chatCtl.setActionRequest({ type: 'text' });
  }, [chatCtl]);

  // Only one component used for display
  return <MuiChat chatController={chatCtl} />;
}
