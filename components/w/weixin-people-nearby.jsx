import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/t/t7q-hstoq.css';
import '../../css/y/ymiwr7boi.css';
import '../../css/y/y3sl4tari.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLm1oedLs"><g class="adexpl72i"><circle class="t7q-hstoq"/><circle class="ymiwr7boi"/><path class="y3sl4tari"/></g></mask></defs><path mask="url(#SVGLm1oedLs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weixin-people-nearby",
	});
}

export default Component;
