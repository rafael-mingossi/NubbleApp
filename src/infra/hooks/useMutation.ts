import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (errorMessage: string) => void;
  errorMessage?: string;
}

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(variables);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (e) {
      setError(true);
      if (options?.onError) {
        options.onError(options.errorMessage || '');
      }
      console.log('ERROR USE MUTATION =>', e);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    mutate,
    error,
  };
}
