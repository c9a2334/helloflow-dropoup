import React, {Component} from "react";
import "./Dropout.css";

class Dropout extends Component {

    prepareBlocks() {
        let steps = this.props.steps;
        let newSteps = [];
        if (steps.length > 0) {
            for (let i = 0; i < steps.length; i++) {
                let difference = NaN;
                if (i > 0) {
                    difference = (steps[i].percentage * 100 / steps[i - 1].percentage) - 100;
                    difference = +(Math.round(+(difference + "e1")) + "e-1");
                }
                newSteps.push({...steps[i], difference})
            }
        } else {
            newSteps = steps;
        }
        return newSteps;
    }

    static differenceVisualClass(difference){
        const additional = difference > 0 ? "-positive" : "-negative";
        return `dropout--difference-visual ${additional}`
    }

    render() {
        let steps = this.prepareBlocks();

        return (
            <div className="dropout">
                <div className="dropout--scroll">
                    {steps.map(step =>
                        <div className={`dropout--step -${step.type}`} key={step.title}>
                            {!isNaN(step.difference) &&
                            <div className="dropout--difference">
                                <div className={Dropout.differenceVisualClass(step.difference)}></div>
                                <div className="dropout--difference-value">{step.difference}%</div>
                            </div>
                            }
                            <div className="dropout--visual">
                                <div className="dropout--block" style={{height: step.percentage + '%'}}>
                                    <div className="dropout--block-title">{step.title}</div>
                                </div>
                                <div className="dropout--percentage">{step.percentage}%</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Dropout;