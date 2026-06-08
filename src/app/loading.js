import { Spinner } from '@heroui/react';


const loading = () => {
    return (
        <div className="flex flex-col items-center gap-2">
        <Spinner size="xl"color='danger' />
        <span className="text-xs text-muted">Extra Large</span>
      </div>
    );
};

export default loading;