import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cs4mf3-il.css';
import '../../css/f/f0a4gwbcn.css';
import '../../css/k/k___aiysz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRTrVgeAl"><g class="ft5dv1b6b"><rect class="cs4mf3-il"/><path class="f0a4gwbcn"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k___aiysz"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGRTrVgeAl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:web-page",
	});
}

export default Component;
