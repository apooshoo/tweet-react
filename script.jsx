//render user and entities
//user:
//name, screenname, howlongago, profile_banner_url
class TweetName extends React.Component{
    render(){
        return(
            <p>{this.props.tweet.user.name}</p>
    )};
};
class TweetText extends React.Component{
    render(){
        console.log(this.props.tweet)
        return(
            <p>{this.props.tweet.text}</p>
    )};
};

class TweetList extends React.Component{
    render(){
        let tweet = this.props.tweets.map((tweet, index) => {
            return(
            <div>
                <TweetName tweet={tweet}/>
                <TweetText tweet={tweet}/>
            </div>
        )});
        return(
            <div>{tweet}</div>
    )};
};

ReactDOM.render(
    <div>
        <TweetList tweets={tweets}/>
    </div>,
    document.getElementById('root')
);