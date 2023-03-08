import { useState, MouseEvent } from 'react';

interface CopyButtonContentProps {
  copyButtonContent: string;
}
export default function CopyText({
  copyButtonContent,
}: CopyButtonContentProps) {
  const [copyButtonText, setCopyButtonText] = useState(
    'Copy to Clipboard'
  );

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(copyButtonContent);
    setCopyButtonText('Copied!');
  };

  return (
    <div className="copyButton componentButton" onClick={handleClick}>
      {copyButtonText}
    </div>
  );
}
