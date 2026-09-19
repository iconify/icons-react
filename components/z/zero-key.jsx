import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/c/c-oefac8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXTysScpk"><g class="adexpl72i"><rect class="r8cyu3bwz"/><rect class="c-oefac8g"/></g></mask></defs><path mask="url(#SVGXTysScpk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:zero-key",
	});
}

export default Component;
