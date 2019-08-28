//render user and entities
//user:
//name, screenname, howlongago, profile_banner_url
class UserHeader extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.user.screen_name}</p>
                <p>{this.props.user.statuses_count}</p>
            </div>
    )};
};

class UserBanner extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.user.profile_banner_url}/>
            </div>
    )};
};

class Details extends React.Component{
    render(){
        let date = this.props.user.created_at.substring(4,7) + " " + this.props.user.created_at.slice(-4)
        return(
            <div>
                <p>{this.props.user.name}</p>
                <p>@{this.props.user.screen_name}</p>
                <span>ProfileLinkHere.com</span> <span>Joined {date}</span>
            </div>
    )};
};

class UserFollowing extends React.Component{
    render(){
        return(
            <span>FollowingCountHere</span>
    )};
};

class FollowersCount extends React.Component{
    render(){
        return(
            <span>{this.props.user.followers_count} Followers</span>
    )};
};

class UserDetails extends React.Component{
    render(){
        let user = this.props.user
        return(
            <div>
                <Details user={user}/>
                <UserFollowing user={user}/> <FollowersCount user={user}/>
            </div>
    )};
};



class ProfilePic extends React.Component{
    render(){
        return(
            <img src={this.props.tweet.user.profile_image_url}/>
    )};
};
class TweetName extends React.Component{
    render(){
        let date = this.props.tweet.created_at.substring(4,10);
        if(date.charAt(4) === '0'){
            date = date.replace('0', '');
        }
        return(
            <p>{this.props.tweet.user.name} {this.props.tweet.user.screen_name} - {date}</p>
    )};
};
class TweetText extends React.Component{
    render(){
        return(
            <p>{this.props.tweet.text}</p>
    )};
};

class RetweetCount extends React.Component{
    render(){
        return(
            <span>{this.props.tweet.retweet_count}</span>
    )};
};

class FavoriteCount extends React.Component{
    render(){
        return(
            <span>{this.props.tweet.favorite_count}</span>
    )};
};

class TweetList extends React.Component{
    render(){
        let tweet = this.props.tweets.map((tweet, index) => {
            return(
            <div>
                <ProfilePic tweet={tweet}/>
                <TweetName tweet={tweet}/>
                <TweetText tweet={tweet}/>
                <RetweetCount tweet={tweet}/> <FavoriteCount tweet={tweet}/>
            </div>
        )});
        return(
            <div>
                <UserHeader user={tweets[0].user}/>
                <UserBanner user={tweets[0].user}/>
                <UserDetails user={tweets[0].user}/>
                <div>{tweet}</div>
            </div>
    )};
};

ReactDOM.render(
    <div>
        <TweetList tweets={tweets}/>
    </div>,
    document.getElementById('root')
);