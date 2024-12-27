import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from './Button';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'download' | 'link';
  url: string;
  icon: React.ReactNode;
}

export function ResourceCard({ title, description, type, url, icon }: ResourceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="mb-4 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => window.open(url, '_blank')}
      >
        {type === 'download' ? (
          <>
            <Download className="w-4 h-4" /> Download
          </>
        ) : (
          <>
            <ExternalLink className="w-4 h-4" /> Visit Resource
          </>
        )}
      </Button>
    </div>
  );
}