import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpsyw0ehr.css';
import '../../css/e/et10d9jyb.css';
import '../../css/b/bloawkd7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpsyw0ehr"/><path class="et10d9jyb"/><path class="bloawkd7m"/>`,
		"fallback": "selfhst:whodb-dark",
	});
}

export default Component;
