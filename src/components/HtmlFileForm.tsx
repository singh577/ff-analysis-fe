import * as React from "react";

interface Props {
}

interface State {
    wordsFile: File | null,
    stopWordsFile: File | null,
}

class HtmlFileFormComponent extends React.Component<Props, State> {
    state = {
        wordsFile: null,
        stopWordsFile: null
    };

    handleSubmit(event) {
        if(event.target.files[0]){
            this.setState({
                wordsFile: event.target.files[0],
            });
        }
        if(event.target.files[1]){
            this.setState({
                stopWordsFile: event.target.files[1]
            });
        }
        event.preventDefault();
    }

    render() {
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>
                       Words File:
                       <input type="file" id="wordFile1" name="wordsFile"></input>
                   </label>
                   <label>
                       Stop Words File:
                       <input type="file" id="stopWordsFile1" name="stopWords"></input>
                   </label>
                   <input type="submit"></input>
               </form>
            </div>
        )
    }
}

export const HtmlFileForm = (HtmlFileFormComponent);