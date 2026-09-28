function HomeScreen() {
    const message = 'Welcome';
    if (message) {
        return <h1>{message}</h1>
    }
    return (
      <h1>Hello</h1>
    );
}

export default HomeScreen;