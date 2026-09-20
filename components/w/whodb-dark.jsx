import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpsyw0ehr.css';
import '../../css/i/io_v3whei.css';
import '../../css/s/sn4d4xbib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpsyw0ehr"/><path class="io_v3whei"/><path class="sn4d4xbib"/>`,
		"fallback": "selfhst:whodb-dark",
	});
}

export default Component;
