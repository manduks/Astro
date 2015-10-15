Layout = React.createClass({
  render() {
    return (
      <div>
        <Modal width={350} height={450}></Modal>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});
