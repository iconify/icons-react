import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbsg529cw.css';
import '../../css/z/zpickcuei.css';
import '../../css/e/e1c16f-rj.css';
import '../../css/m/mfoxvqbzy.css';
import '../../css/f/f43eqhbwn.css';
import '../../css/u/u99giob-v.css';
import '../../css/s/stjv0pdcv.css';
import '../../css/d/dftf9rvck.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbsg529cw"/><path class="zpickcuei"/><circle class="e1c16f-rj"/><circle class="mfoxvqbzy"/><circle class="f43eqhbwn"/><circle class="u99giob-v"/><circle class="stjv0pdcv"/><circle class="dftf9rvck"/>`,
		"fallback": "formkit:week",
	});
}

export default Component;
