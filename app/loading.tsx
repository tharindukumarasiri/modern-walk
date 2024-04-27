const loading = () => {
  return (
    <div className="flex h-[calc(100vh-20rem)] items-center justify-center">
      <div
        className="text-blue inline-block size-10 animate-spin rounded-full border-[3px] border-current border-t-transparent"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default loading;
