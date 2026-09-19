import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qss-i-5ch.css';
import '../../css/x/x_3zjhbcg.css';
import '../../css/t/tbom9wbft.css';
import '../../css/f/fexlw8bmi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="qss-i-5ch"/><path class="x_3zjhbcg"/><path class="tbom9wbft"/><path class="fexlw8bmi"/></g>`,
		"fallback": "glyphs-poly:wind",
	});
}

export default Component;
