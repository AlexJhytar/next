import { getLocale } from "next-intl/server";
import bannerMain from "@/components/BlockWP/blocks/BannerMain/bannerMain";
import blockAbout from "@/components/BlockWP/blocks/BlockAbout/about";
import blockClients from "@/components/BlockWP/blocks/BlockClients/clients";
import blockDevelopment from "@/components/BlockWP/blocks/BlockDevelopment/development";
import blockCreation from "@/components/BlockWP/blocks/BlockCreation/creation";
import blockSolution from "@/components/BlockWP/blocks/BlockSolutions/solution";
import blockFaq from "@/components/BlockWP/blocks/BlockFAQ/faq";
import blockServices from "@/components/BlockWP/blocks/BlockServices/services";
import blockProjects from "@/components/BlockWP/blocks/BlockProjects/projects";
import blockTestimonials from "@/components/BlockWP/blocks/BlockTestimonials/testimonials";
import blockTeam from "@/components/BlockWP/blocks/BlockTeam/team";
import blockContactProject
  from "@/components/BlockWP/blocks/BlockContactProject/blockContactProject";
import blockQuote from "@/components/BlockWP/blocks/BlockQuote/quote";
import blockConnection from "@/components/BlockWP/blocks/BlockConnection/connection";
import blockStats from "@/components/BlockWP/blocks/BlockStats/stats";
import blockStandards from "@/components/BlockWP/blocks/BlockStandards/standards";
import blockHistory from "@/components/BlockWP/blocks/BlockHistory/history";
import blockContent from "@/components/BlockWP/blocks/BlockContent/content";
import blockParagraph from "@/components/BlockWP/blocks/BlockParagraph/paragraph";
import blockHeading from "@/components/BlockWP/blocks/BlockHeading/heading";
import blockServicesTwo from "@/components/BlockWP/blocks/BlockServicesTwo/servicesTwo";
import blockProcess from "@/components/BlockWP/blocks/BlockProcess/process";

export async function blockGutenberg( listBlocks ) {
  let language = await getLocale();
  let lang = language === 'en' ? '' : `/${language}`;
  let block = [];
  
  return await listBlocks.map(( item ) => {
    //console.log(item.blockName)
    block.length = 0;
    switch (item.blockName) {
      case 'acf/blocksolutions': {
        block.push({
          title: item.attrs.data.solutions_title || '',
          tag: item.attrs.data.solutions_tag || '',
          list: item.list
        });
        return blockSolution(block);
      }
      case 'acf/blockinner': {
        block.push({
          title_1: item.attrs.data.title_inner_1 || '',
          title_2: item.attrs.data.title_inner_2 || '',
          subtitle: item.attrs.data.text_description_inner || '',
          list: item.list
        });
        return bannerMain(block);
      }
      case 'acf/blockabout': {
        block.push({
          data: item.attrs.data || '', list: item.list
        });
        return blockAbout(block);
      }
      case 'acf/blockclients': {
        block.push(item.list);
        return blockClients(block);
      }
      case 'acf/blockdevelopment': {
        block.push({
          list: item.list
        });
        return blockDevelopment(block);
      }
      case 'acf/blockcreation-': {
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
        return blockCreation(block);
      }
      case 'acf/blockfaq': {
        block.push({
          tag: item.attrs.data.faq_tag || '',
          title: item.attrs.data.faq_title || '',
          list: item.list
        });
        
        return blockFaq(block);
      }
      case 'acf/blockservices': {
        block.push({
          list: item.list,
          tag: item.attrs.data.service_tag || '',
          title: item.attrs.data.service_title || '',
          text: item.attrs.data.service_text || '',
        });
        return blockServices(block);
      }
      case 'acf/blockprojects': {
        block.push({
          tag: item.attrs.data.projects_tag || '',
          title: item.attrs.data.projects_title || '',
          list: item.list
        })
        return blockProjects(block);
      }
      case 'acf/blocktestimonials': {
        block.push({
          tag: item.attrs.data.testimonials_tag || '',
          title: item.attrs.data.testimonials_title || '',
          text: item.attrs.data.testimonials_text || '',
          socialCaption: item.attrs.data.testimonials_socials_text || '',
          list: item.list || '',
        })
        return blockTestimonials(block);
      }
      case 'acf/blockslider': {
        block.push({
          tag: item.attrs.data.team_tag || '',
          title: item.attrs.data.team_title || '',
          text: item.attrs.data.team_text || '',
          style: item.attrs.data.style_select || '',
          list: item.list
        });
        return blockTeam(block);
      }
      case 'acf/blockcontactproject': {
        block.push({
          checkboxLabel: item.attrs.data.chexbox_text_contacts_projects || '',
          title: item.attrs.data.contacts_project_title || '',
          buttonText: item.attrs.data.form_button_text_contacts_projects || '',
          idForm: item.attrs.data.id_form_text_contacts_projects || '',
        });
        return blockContactProject(block);
      }
      case 'acf/blockquote': {
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
        return blockQuote(block, lang);
      }
      case 'acf/blockcontactinformation': {
        block.push({
          tag: item.attrs.data.about_tag || '',
          text: item.attrs.data.about_text || '',
          title: item.attrs.data.about_title || '',
          list: item.list || '',
        });
        return blockConnection(block);
      }
      case 'acf/blockstats': {
        block.push({
          list: item.list || '',
        });
        
        return blockStats(block);
      }
      case 'acf/blockstandarts': {
        block.push({
          tag: item.attrs.data.standarts_tag || '',
          text: item.attrs.data.standarts_text || '',
          title: item.attrs.data.standarts_title || '',
          list: item.list || '',
        });
        
        return blockStandards(block);
      }
      case 'acf/blockhistory': {
        block.push({
          tag: item.attrs.data.history_tag || '',
          title: item.attrs.data.history_title || '',
          list: item.list
        });
        
        return blockHistory(block);
      }
      case 'acf/blockcontent': {
        block.push({
          list: item.list || '',
        });
        
        return blockContent(block);
      }
      case 'core/paragraph': {
        block.push({
          content: item.rendered || '',
        });
        
        return blockParagraph(block);
      }
      case 'core/heading': {
        block.push({
          content: item.rendered || '',
        });
        
        return blockHeading(block);
      }
      case 'acf/blockservicesblock': {
        block.push({
          list: item.list,
          tag: item.attrs.data.services_block_tag || '',
          title: item.attrs.data.services_block_title || '',
        });
        
        return blockServicesTwo(block);
      }
      case 'acf/blockprocess': {
        block.push({
          tag: item.attrs.data.tag_pocces || '',
          title: item.attrs.data.title_pocces || '',
          list: item.list
        });
        
        return blockProcess(block);
      }
      // case 'acf/blockgallery': {
      //   block.push({
      //     list: item.gallery_list
      //   });
      //   break;
      // }
    }
    
    if (item.blockName === 'acf/blockprojectinformation') {
      block.push({
        title: item.attrs.data.project_information_title || '',
        title_2: item.attrs.data.project_information_title_2 || '',
        tag: item.attrs.data.project_information_tag || '',
        text: item.attrs.data.project_information_text || '',
        list: item.list
      });
    }
    if (item.blockName === 'acf/blockcontacts') {
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
    if (item.blockName === 'acf/blockadvantages') {
      block.push({
        tag: item.attrs.data.advantages_tag || '',
        title: item.attrs.data.advantages_title || '',
        text: item.attrs.data.advantages_text || '',
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blocktools') {
      block.push({
        tag: item.attrs.data.tools_tag || '',
        title: item.attrs.data.tools_title || '',
        text: item.attrs.data.tools_text || '',
        list: item.list || '',
      });
    }
    if (item.blockName === 'acf/blockrecentproject') {
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
      block.push({
        projectTag: item.attrs.data.tag_other_project || '',
        projectText: item.attrs.data.text_other_project || '',
        projectTitle: item.attrs.data.title_other_project || '',
        list: item.list,
        galleryList: item.gallery_list
      });
    }
    if (item.blockName === 'acf/blockresult') {
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
      block.push({
        tag: item.attrs.data.tag_favourite_project || '',
        text: item.attrs.data.text_favourite_project || '',
        title: item.attrs.data.title_favourite_project || '',
        list: item.list
      });
    }
    
  });
}