HomeLayout = React.createClass({
  render() {
    return (
      <div>
        <Modal width={300} height={400}></Modal>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});
