import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/f/fr2f70jnu.css';
import '../../css/d/dvw44-w9a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="fr2f70jnu"/><path class="dvw44-w9a"/></g>`,
		"fallback": "streamline-color:zodiac-3",
	});
}

export default Component;
