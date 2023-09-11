import React, { FC } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Styled from "./styled";
import { HandleProps } from "rc-slider/lib/Handles/Handle";

type TRenderProps = {
  "aria-valuenow": number;
} & HandleProps;

type TRangeSliderProps = {
  min: number;
  max: number;
  onChange: (vals: number[]) => void;
  tooltipPrefix?: string;
};

const RangeSlider: FC<TRangeSliderProps> = ({
  max,
  onChange,
  tooltipPrefix,
}) => {
  return (
    <Styled.Wrapper>
      <Slider
        range
        defaultValue={[0, 100]}
        handleRender={(renderProps, props) => {
          return (
            <div {...renderProps.props}>
              <Styled.TooltipWrapper
                aligment={props.index === 0 ? "left" : "right"}
              >
                <span>{tooltipPrefix}</span>
                <span>
                  {Math.ceil(
                    max *
                      ((renderProps.props as TRenderProps)["aria-valuenow"] /
                        100)
                  )}
                </span>
              </Styled.TooltipWrapper>
            </div>
          );
        }}
        railStyle={{
          backgroundColor: "black",
        }}
        trackStyle={{
          backgroundColor: "gray",
        }}
        handleStyle={{
          backgroundColor: "#000",
          boxShadow: "none",
          opacity: 1,
          border: "1px solid black",
          width: "20px",
          height: "20px",
          marginTop: "-8px",
        }}
        onAfterChange={(vals) => {
          if (Array.isArray(vals)) {
            onChange([
              Math.ceil((vals[0] / 100) * max),
              Math.ceil((vals[1] / 100) * max),
            ]);
          }
        }}
        allowCross={false}
        pushable={22}
      />
    </Styled.Wrapper>
  );
};

export default RangeSlider;
