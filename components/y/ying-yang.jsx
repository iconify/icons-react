import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e95lwqnoz.css';
import '../../css/z/zx1vphjyn.css';
import '../../css/t/t0u4y_vup.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e95lwqnoz"/><path class="zx1vphjyn"/><path class="t0u4y_vup"/></g>`,
		"fallback": "glyphs:ying-yang",
	});
}

export default Component;
