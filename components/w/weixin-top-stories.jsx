import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uns4e8bmd.css';
import '../../css/u/uo9qgzmqh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4Rm6Hdox"><g class="aql7dnt-u"><path class="uns4e8bmd"/><path class="uo9qgzmqh"/></g></mask></defs><path mask="url(#SVG4Rm6Hdox)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weixin-top-stories",
	});
}

export default Component;
