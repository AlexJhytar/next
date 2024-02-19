import { BlockAbout } from "../BlockWP/blocks/BlockAbout/about";

export function BlockWP( listBlocks ) {
  
  let block = [];
  let about, development, creation, faq, clients, services, process, team, project, contacts,
    advantages, heading, paragraph, testimonials, stats, servicesTwo, tools,
    quote, connection, standards, content, contactPage, history, projectInfo, projectDescription,
    blockResult, projectInformation, gallery, solutions, scrollProject = false;
  
  listBlocks.map(( item ) => {
    if (item.blockName === 'acf/blocksolutions') {
      solutions = true;
      block.push({
        title: item.attrs.data.solutions_title || '',
        tag: item.attrs.data.solutions_tag || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockgallery') {
      gallery = true;
      block.push({
        list: item.gallery_list
      });
    }
    if (item.blockName === 'acf/blockprojectinformation') {
      projectInformation = true;
      block.push({
        title: item.attrs.data.project_information_title || '',
        title_2: item.attrs.data.project_information_title_2 || '',
        tag: item.attrs.data.project_information_tag || '',
        text: item.attrs.data.project_information_text || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockabout') {
      about = true;
      block.push({
        data: item.attrs.data || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockdevelopment') {
      development = true;
      block.push({
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockcreation-') {
      creation = true;
      block.push({
        tag: item.attrs.data.creation_tag || '',
        title: item.attrs.data.creation_title || '',
        text: item.attrs.data.creation_text || '',
        textButton: item.attrs.data.creation_button || '',
        info: item.attrs.data.creation_user_info || '',
        imgURL: item.attrs.data.creation_image_image_data.url_full || '',
        imgALT: item.attrs.data.creation_image_alt || '',
        imgWidth: item.attrs.data.creation_image_image_data.width || '',
        imgHeight: item.attrs.data.creation_image_image_data.height || '',
      });
    }
    if (item.blockName === 'acf/blockfaq') {
      faq = true;
      block.push({
        tag: item.attrs.data.faq_tag || '',
        title: item.attrs.data.faq_title || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockclients') {
      clients = true;
      block.push(item.list);
    }
    if (item.blockName === 'acf/blockservices') {
      services = true;
      block.push({
        list: item.list,
        tag: item.attrs.data.service_tag || '',
        title: item.attrs.data.service_title || '',
        text: item.attrs.data.service_text || '',
      });
    }
    if (item.blockName === 'acf/blockservicesblock') {
      servicesTwo = true;
      block.push({
        list: item.list,
        tag: item.attrs.data.services_block_tag || '',
        title: item.attrs.data.services_block_title || '',
      });
    }
    if (item.blockName === 'acf/blockprocess') {
      process = true;
      block.push({
        tag: item.attrs.data.tag_pocces || '',
        title: item.attrs.data.title_pocces || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockslider') {
      team = true;
      block.push({
        tag: item.attrs.data.team_tag || '',
        title: item.attrs.data.team_title || '',
        text: item.attrs.data.team_text || '',
        style: item.attrs.data.style_select || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockprojects') {
      project = true;
      block.push({
        tag: item.attrs.data.projects_tag || '',
        title: item.attrs.data.projects_title || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockcontacts') {
      contacts = true;
      block.push({
        tag: item.attrs.data.contacts_tag || '',
        title: item.attrs.data.contacts_title || '',
        text: item.attrs.data.contacts_text || '',
        socialsText: item.attrs.data.socials_text || '',
        formButton: item.attrs.data.form_button_text || '',
        formID: item.attrs.data.id_form_text || '',
        checkboxLabel: item.attrs.data.chexbox_text || '',
        list: item.list
      });
    }
    if (item.blockName === 'core/heading') {
      heading = true;
      block.push({
        content: item.rendered || '',
      });
    }
    if (item.blockName === 'core/paragraph') {
      paragraph = true;
      block.push({
        content: item.rendered || '',
      });
    }
    if (item.blockName === 'acf/blockadvantages') {
      advantages = true;
      block.push({
        tag: item.attrs.data.advantages_tag || '',
        title: item.attrs.data.advantages_title || '',
        text: item.attrs.data.advantages_text || '',
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blocktestimonials') {
      testimonials = true;
      block.push({
        tag: item.attrs.data.testimonials_tag || '',
        title: item.attrs.data.testimonials_title || '',
        text: item.attrs.data.testimonials_text || '',
        socialCaption: item.attrs.data.testimonials_socials_text || '',
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blockstats') {
      stats = true;
      block.push({
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blocktools') {
      tools = true;
      block.push({
        tag: item.attrs.data.tools_tag || '',
        title: item.attrs.data.tools_title || '',
        text: item.attrs.data.tools_text || '',
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blockquote') {
      quote = true;
      block.push({
        name: item.attrs.data.quote_name || '',
        position: item.attrs.data.quote_position || '',
        text: item.attrs.data.quote_text || '',
        link: item.attrs.data.quote_link || '',
        linkText: item.attrs.data.quote_button || '',
        image: item.attrs.data.quote_image_image_data.url_full || '',
        imageH: item.attrs.data.quote_image_image_data.height || '',
        imageW: item.attrs.data.quote_image_image_data.width || '',
      });
    }
    if (item.blockName === 'acf/blockcontactinformation') {
      connection = true;
      block.push({
        tag: item.attrs.data.about_tag || '',
        text: item.attrs.data.about_text || '',
        title: item.attrs.data.about_title || '',
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blockstandarts') {
      standards = true;
      block.push({
        tag: item.attrs.data.standarts_tag || '',
        text: item.attrs.data.standarts_text || '',
        title: item.attrs.data.standarts_title || '',
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blockcontent') {
      content = true;
      block.push({
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blockcontactproject') {
      contactPage = true;
      block.push({
        checkboxLabel: item.attrs.data.chexbox_text_contacts_projects || '',
        title: item.attrs.data.contacts_project_title || '',
        buttonText: item.attrs.data.form_button_text_contacts_projects || '',
        idForm: item.attrs.data.id_form_text_contacts_projects || '',
      });
    }
    if (item.blockName === 'acf/blockhistory') {
      history = true;
      block.push({
        tag: item.attrs.data.history_tag || '',
        title: item.attrs.data.history_title || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockrecentproject') {
      projectInfo = true;
      block.push({
        projectDescription: item.attrs.data.project_description || '',
        projectName: item.attrs.data.project_name || '',
        projectTag: item.attrs.data.tag_recent_project || '',
        projectText: item.attrs.data.text_recent_project || '',
        projectTitle: item.attrs.data.title_recent_project || '',
        projectsImageUrl: item.attrs.data.projects_image_data.url_full || '',
        projectsImageW: item.attrs.data.projects_image_data.width || '',
        projectsImageH: item.attrs.data.projects_image_data.height || '',
        projectsImageAlt: item.attrs.data.text_image_otions_info || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockotherproject') {
      projectDescription = true;
      block.push({
        projectTag: item.attrs.data.tag_other_project || '',
        projectText: item.attrs.data.text_other_project || '',
        projectTitle: item.attrs.data.title_other_project || '',
        list: item.list,
        galleryList: item.gallery_list
      });
    }
    if (item.blockName === 'acf/blockresult') {
      blockResult = true;
      block.push({
        imgURL: item.attrs.data.achievement_image_data.url_full || '',
        imgW: item.attrs.data.achievement_image_data.width || '',
        imgH: item.attrs.data.achievement_image_data.height || '',
        imgALR: item.attrs.data.image_alt_result || '',
        title: item.attrs.data.title_result || '',
        text: item.attrs.data.text_result || '',
        tag: item.attrs.data.tag_result || '',
        resultNumb_1: item.attrs.data.achievement_number || '',
        resultNumb_2: item.attrs.data.achievement_number_2 || '',
        resultNumb_3: item.attrs.data.achievement_number_3 || '',
        resultNumb_4: item.attrs.data.achievement_number_4 || '',
        resultText_1: item.attrs.data.achievement_text || '',
        resultText_2: item.attrs.data.achievement_text_2 || '',
        resultText_3: item.attrs.data.achievement_text_3 || '',
        resultText_4: item.attrs.data.achievement_text_4 || '',
      });
    }
    if (item.blockName === 'acf/blockfavoriteproject') {
      scrollProject = true;
      block.push({
        tag: item.attrs.data.tag_favourite_project || '',
        text: item.attrs.data.text_favourite_project || '',
        title: item.attrs.data.title_favourite_project || '',
        list: item.list
      });
    }
    return true;
  })

  return about === true ? BlockAbout(block) : ''
}