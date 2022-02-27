import { Button } from '@src/components/atoms';
import { useReducerWithoutDispatch } from '@src/hooks';
import { VFC } from 'react';
import styled from 'styled-components';

interface PlayerProps {
  record: Blob | null;
}

export const RecordPlayer: VFC<PlayerProps> = ({ record }) => {
  const [isOpen, [toggleOpen]] = useReducerWithoutDispatch(false, {
    toggleOpen: isOpen => !isOpen,
  });

  return (
    <div>
      <Button onClick={toggleOpen} disabled={!record}>
        녹화 {isOpen ? '닫기' : '보기'}
      </Button>
      {isOpen && record && (
        <RecordVideo src={URL.createObjectURL(record)} autoPlay />
      )}
    </div>
  );
};

const RecordVideo = styled.video`
  height: 100px;
  width: auto;
`;
