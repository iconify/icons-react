import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzkwn1gtf.css';
import '../../css/a/a4jgiob7z.css';
import '../../css/n/n7e06sbmp.css';
import '../../css/x/x36mxccup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dzkwn1gtf"/><path class="a4jgiob7z"/><circle class="n7e06sbmp"/><path class="x36mxccup"/></g>`,
		"fallback": "andrsrxn:women",
	});
}

export default Component;
