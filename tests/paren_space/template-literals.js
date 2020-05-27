`${1 ?? 2}`;

`glp-text-${isImagePresent ? 56 : 64}@M`

const headerResolve = css.resolve`
.top-bar {background:black;
  margin: 0;
  position: fixed;
  top: 0;left:0;
  width: 100%;
  text-align: center     ;
  padding: 15px  0  0  1em;
  z-index: 9999;
}

.top-bar .logo {
  height: 30px;
  margin: auto;
  position: absolute;
	left: 0;right: 0;
}
`;

return (<div css={`
  color: blue;
  font-size: 17 px;

  &:hover {
    color: green;
  }

  & .some-class {
    font-size: 20px;
  }
`}/>)

const SpaceOrNoSpace = styled.div`
  transform: ${(props)=>(props.isComplete?'rotateY(180deg)':'rotateY(0)')};
  transform: ${ ( props ) => ( props.isComplete ? 'rotateY(180deg)' : 'rotateY(0)' ) };
`;
