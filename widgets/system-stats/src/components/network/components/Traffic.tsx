import { Card } from '@overline-zebar/ui';
import { ArrowDownUp } from 'lucide-react';
import { NetworkTraffic } from 'zebar';

type Props = {
  traffic?: NetworkTraffic | null;
};

const formatDataSize = (measure: any): string => {
  if (!measure) return 'N/A';
  return `${measure.iecValue.toFixed(2)} ${measure.iecUnit}`;
};

export default function Traffic({ traffic }: Props) {
  if (!traffic) return;

  return (
    <section className="space-y-1.5">
      <h3 className="font-medium flex items-center text-text-muted gap-2">
        <ArrowDownUp className="h-5 w-5" aria-hidden="true" />
        Overall Traffic
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <Card>
          <div className="text-text-muted">Received</div>
          <div className="text-text">{formatDataSize(traffic.received)}</div>
        </Card>
        <Card>
          <div className="text-text-muted">Transmitted</div>
          <div className="text-text">{formatDataSize(traffic.transmitted)}</div>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Card>
          <div className="text-text-muted">Total Received</div>
          <div className="text-text">
            {formatDataSize(traffic.totalReceived)}
          </div>
        </Card>
        <Card>
          <div className="text-text-muted">Total Transmitted</div>
          <div className="text-text">
            {formatDataSize(traffic.totalTransmitted)}
          </div>
        </Card>
      </div>
    </section>
  );
}
