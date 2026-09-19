import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtfmx7b3v.css';
import '../../css/w/w9di54bef.css';
import '../../css/y/yvwt00x9m.css';
import '../../css/a/aok_l9b-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wtfmx7b3v"><path class="w9di54bef"/><ellipse class="yvwt00x9m"/></g><path class="aok_l9b-n"/>`,
		"fallback": "flat-color-icons:wi-fi-logo",
	});
}

export default Component;
