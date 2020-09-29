const svc = process.env.NODE_ENV === 'development'
  ? require('./dev').default
  : require('./prod').default;

export default { ...svc };
