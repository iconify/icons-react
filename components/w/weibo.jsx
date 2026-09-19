import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tuspmi0se.css';
import '../../css/e/ezgn372ii.css';
import '../../css/v/vcii2bb4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqFsvzeTr"><g class="ft5dv1b6b"><path class="tuspmi0se"/><path class="ezgn372ii"/><path class="vcii2bb4q"/></g></mask></defs><path mask="url(#SVGqFsvzeTr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weibo",
	});
}

export default Component;
