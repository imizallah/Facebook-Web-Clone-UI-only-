import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="https://images.unsplash.com/photo-1604247548381-6597ad0c3043?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" profileSrc="https://web.facebook.com/photo?fbid=1911019249008560&set=a.110480072395829" title="Sunday Ishaya" />
      <Story image="https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" profileSrc="https://web.facebook.com/photo?fbid=1911019249008560&set=a.110480072395829" title="Biello Nuhu" />
      <Story image="https://images.unsplash.com/photo-1585113576404-955add5a2426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" profileSrc="https://web.facebook.com/photo?fbid=1911019249008560&set=a.110480072395829" title="Jane Doe" />
      <Story image="https://images.unsplash.com/photo-1604160526773-cd287cbef8b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" profileSrc="https://web.facebook.com/photo?fbid=1911019249008560&set=a.110480072395829" title="John Doe" />
      <Story image="https://images.unsplash.com/photo-1604274608709-f9c2bb7fc658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" profileSrc="https://web.facebook.com/photo?fbid=1911019249008560&set=a.110480072395829" title="Mark Samson" />
    </div>
  )
}

export default StoryReel
