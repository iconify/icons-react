import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz15zbcnl.css';
import '../../css/n/ngd8w9bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz15zbcnl"/><path class="ngd8w9bib"/>`,
		"fallback": "token:zilliqa",
	});
}

export default Component;
