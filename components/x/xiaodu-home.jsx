import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e9w6oz5wa.css';
import '../../css/j/juol1wqdx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWvt71XSj"><g class="wwvp95byt"><path class="e9w6oz5wa"/><path class="juol1wqdx"/></g></mask></defs><path mask="url(#SVGWvt71XSj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:xiaodu-home",
	});
}

export default Component;
